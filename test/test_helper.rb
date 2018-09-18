ENV['RAILS_ENV'] ||= 'test'
<<<<<<< HEAD
require File.expand_path('../../config/environment', __FILE__)
=======
require_relative '../config/environment'
>>>>>>> a1ee1aafa86185f09afceb81132a4c93ef526a85
require 'rails/test_help'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end
