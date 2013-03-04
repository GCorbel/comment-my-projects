working_directory "/var/www/social-reviewing/current/"
pid "/var/www/social-reviewing/shared/tmp/pids/unicorn.pid"
stderr_path "/var/www/social-reviewing/shared/log/unicorn.log"
stdout_path "/var/www/social-reviewing/shared/log/unicorn.log"

listen "/tmp/unicorn.sock"
worker_processes 2
timeout 30
ENV["HOME"] = "/root"
