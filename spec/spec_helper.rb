require 'rubygems'
require 'spork'

Spork.prefork do
  ENV["RAILS_ENV"] ||= 'test'
  require File.expand_path("../../config/environment", __FILE__)
  require 'rspec/rails'
  require 'rspec/autorun'
  require 'capybara/rails'
  require 'database_cleaner'
  require "#{Rails.root}/lib/spam_checker/spam_checker"

  Dir[Rails.root.join("spec/support/**/*.rb")].each {|f| require f}

  RSpec.configure do |config|
    config.mock_with :mocha
    config.fixture_path = "#{::Rails.root}/spec/fixtures"
    config.use_transactional_fixtures = true
    config.before(:each) do
      if example.metadata[:js]
        DatabaseCleaner.strategy = :truncation
        DatabaseCleaner.start
      end
    end

    config.after(:each) do
      if example.metadata[:js]
        DatabaseCleaner.clean
        load "#{Rails.root}/db/seeds.rb"
      end
    end
    config.include FactoryGirl::Syntax::Methods
    config.include Warden::Test::Helpers, type: :request
    config.include RequestHelpers, type: :request
    config.include Devise::TestHelpers, type: :controller
    config.include ControllerHelpers, type: :controller
  end

  Capybara.javascript_driver = :webkit
  Capybara.run_server = true
  Capybara.server_port = 7000
  Capybara.app_host = "http://localhost:#{Capybara.server_port}"
  Capybara.automatic_reload = false
  Capybara.default_wait_time = 10
end

Spork.each_run do
  Dir["#{Rails.root}/app/models//*.rb"].each do |model|
    load model
  end
  FactoryGirl.reload
  Rails.cache.clear
  ActiveSupport::Dependencies.clear
end
