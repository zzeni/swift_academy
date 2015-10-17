# swift_api.rb
require 'sinatra'
require 'json'
#require 'byebug'

get '/' do
  'Hello world!'
end

post "/fs_read" do
  request.body.rewind  # in case someone already read it
  data = URI.decode(request.body.read)
  query = Rack::Utils.parse_nested_query(data)
  
  dir = query['dir']
  
  return 'N/A' if Dir.pwd > File.absolute_path(dir)
  
  if Dir.exists?(dir)
    entries = Dir.entries(dir).reject {|x| x[0] == '.'}
  
    unless entries.empty?
      result = "<ul class=\"jqueryFileTree\" style=\"display: none;\">"
      dirs = ""
      files = ""
  
      entries.each do |file|
        if Dir.exists?(File.join(dir,file))
          dirs += "<li class=\"directory collapsed\"><a href=\"#\" rel=\"#{dir}/#{file}/\">#{file}</a></li>"
        else
          fails += "<li class=\"file ext_#{File.extname(file).sub(/^\./,'')}\"><a href=\"#\" rel=\"#{dir}#{file}\">#{file}</a></li>"
        end
      end
    
      result += dirs
      result += files
      result += "</ul>"
    end
  end

  return result
end
