require 'spec_helper'

describe SearchDecorator do
  describe :new_project do
    it 'create a new project' do
      params = { title: 'Title'}
      Project.expects(:new).with(params)
      SearchDecorator.new_project(params)
    end
  end
end
