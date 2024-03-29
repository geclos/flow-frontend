# config valid for current version and patch releases of Capistrano
lock "~> 3.17"

set :application, "flow_frontend"
set :repo_url, "git@github.com:geclos/flow-frontend.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/srv/frontend"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure

# nvm
set :nvm_type, :user # or :system, depends on your nvm setup
set :nvm_node, 'v16.17.0'
set :nvm_map_bins, %w{node npm yarn}

namespace :deploy do
  after :finishing, :build do
    on roles(:web) do
      execute "cd '#{release_path}'; npm run build"
    end
  end
end
