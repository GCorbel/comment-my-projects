class Project < ActiveRecord::Base
  acts_as_taggable

  default_scope -> { where(locale: I18n.locale) }

  has_many :comments, as: :item, dependent: :destroy
  has_many :notes, dependent: :destroy
  has_many :followers,
    through: :project_user_followers,
    source: :user,
    dependent: :destroy
  has_many :project_user_followers, dependent: :destroy
  has_many :actualities, dependent: :destroy
  belongs_to :user

  attr_accessible :title, :url, :type_id, :description, :tag_ids, :tag_list

  validates :title, presence: true
  validates :url, presence: true, format: { with: /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$/ix }
  validates :description, presence: true

  class << self
    def search(word = nil)
      projects = Project
      projects = projects.where('title like ?', "%#{word}%") if word
      projects.all
    end

    def top(number)
      Project.joins(:notes)
             .select("projects.title")
             .select("projects.id")
             .select("count(value) as nb_notes")
             .select("sum(value) as sum_notes")
             .group("projects.id")
             .order("(sum(value) /count(value)) DESC")
             .limit(number)
    end
  end

  def to_param
    "#{id}-#{title.parameterize}"
  end

  def to_s
    title
  end

  def root_comments
    comments.where(ancestry: nil)
  end

  def add_comment(comment)
    comments << comment
  end

  def add_follower(user)
    project_user_followers.create(user: user)
  end

  def remove_follower(user)
    followers.delete(user)
  end

  def followers_ids
    followers.pluck(:user_id)
  end

  def note_for(tag)
    values = notes_for(tag).pluck(:value)
    return nil if values.empty?
    (values.sum / values.count.to_f).round(1)
  end

  def notes_for(tag)
    notes.where(tag_id: tag)
  end

  def number_of_notes_for(tag)
    notes_for(tag).count
  end

  def tags_with_general
    [ActsAsTaggableOn::Tag.new(name: 'General')] + tags
  end
end
