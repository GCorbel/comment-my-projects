require 'yaml'

class SRConfig
  class << self
    def method_missing(name)
      if config.include? name.to_s.upcase
        return config[name.to_s.upcase]
      else
        super(name)
      end
    end

    def config
      @config ||= YAML.load_file("#{Rails.root}/config/config.#{Rails.env}.yml")
    end
  end
end
