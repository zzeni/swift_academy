# swift_api.rb
require 'sinatra'
require 'sinatra/namespace'

#require 'json'
#require 'byebug'

WWW_ROOT = ENV['WWW_ROOT'] || '/home/deploy/swift_academy/'

get '/' do
  'Hi! This should not happen, btw :)'
end

namespace '/api' do
  post "/fs_read" do
    request.body.rewind  # in case someone already read it
    data = URI.decode(request.body.read)
    query = Rack::Utils.parse_nested_query(data)

    dir = query['dir']
    
    Dir.chdir(WWW_ROOT)
    
    return 'N/A' if Dir.pwd > File.absolute_path(dir)

    if Dir.exists?(dir)
      entries = Dir.entries(dir).reject {|x| x[0] == '.'}
      
      if %w(group1 group2).include?(File.basename(File.absolute_path(dir)))
        entries.reject! { |x| x =~ /\.html\Z/ } 
      end

      unless entries.empty?
        result = "<ul class=\"jqueryFileTree\" style=\"display: none;\">"
        dirs = ""
        files = ""

        entries.each do |file|
          rel = "#{dir}/#{file}"
          
          if Dir.exists?(File.join(dir,file))
            dirs += "<li class=\"directory collapsed\"><a href=\"#\" rel=\"#{rel}/\">#{file}</a></li>"
          else
            ext = File.extname(file).sub(/\A\./,'')
            files += "<li class=\"file ext_#{ext}\"><a href=\"#\" rel=\"/#{rel}\">#{file}</a></li>"
          end
        end

        result += dirs
        result += files
        result += "</ul>"
      end
    else
      return "Ooops! Can't find your folder"
    end

    return result
  end
  
  get '/update' do
    lock_file = 'updating.lock'
    
    Dir.chdir(WWW_ROOT)
    
    if File.exists?(lock_file)
      'System is currently updating'
    else
      output = 0
      
      File.open(lock_file, File::RDWR|File::CREAT, 0644) do |f|
        f.flock(File::LOCK_EX)
        output = "lock file created..\n\n" 
        output += %x(git pull && git submodule init && git submodule update)
      end
      
      output += "\n.. lock file removed" if File.delete(lock_file)
      
      "<pre>#{output}</pre>"
    end
  end
end