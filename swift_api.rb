# swift_api.rb
require 'sinatra'
require 'sinatra/namespace'

#require 'json'
#require 'byebug'

get '/' do
  'Hi! This should not happen, btw :)'
end

namespace '/api' do
  post "/fs_read" do
    request.body.rewind  # in case someone already read it
    data = URI.decode(request.body.read)
    query = Rack::Utils.parse_nested_query(data)

    dir = query['dir']
    Dir.chdir('/home/deploy/swift_academy/')

    return 'N/A' if Dir.pwd > File.absolute_path(dir)

    if Dir.exists?(dir)
      entries = Dir.entries(dir).reject {|x| x[0] == '.'}
      
      #      entries.reject! { /\.html\z/ } if %w(group1 group2).include?(dir) # Doesn't work

      unless entries.empty?
        result = "<ul class=\"jqueryFileTree\" style=\"display: none;\">"
        dirs = ""
        files = ""

        entries.each do |file|
          rel = "#{dir}/#{file}"
          
          if Dir.exists?(File.join(dir,file))
            dirs += "<li class=\"directory collapsed\"><a href=\"#\" rel=\"/#{rel}\">#{file}</a></li>"
          else
            files += "<li class=\"file ext_#{File.extname(file).sub(/\a\./,'')}\"><a href=\"#\" rel=\"/#{rel}\">#{file}</a></li>"
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
end