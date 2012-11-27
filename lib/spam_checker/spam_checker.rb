class SpamChecker
  include Rakismet::Model

  rakismet_attrs author: proc { comment.username || comment.user.username},
                 content: proc { comment.message }

  attr_accessor :comment, :user_ip, :user_agent, :referrer

  def initialize(comment, request)
    @comment = comment
    @user_ip = request.remote_ip
    @user_agent = request.env['HTTP_USER_AGENT']
    @referrer = request.env['HTTP_REFERER']
  end

  def self.spam?(comment, request)
    SpamChecker.new(comment, request).spam? unless Rails.env.development?
  end
end
