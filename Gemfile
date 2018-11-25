source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

group :development do
  gem "capistrano", "~> 3.11"
  gem 'capistrano-nvm'
  gem 'capistrano-npm'
end
