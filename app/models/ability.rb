class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, :all
    can :create, Comment
    can :create, Project
    can :create, Note
    can :advanced_search, Project

    if user.try(:admin)
      can :manage, :all
    elsif user
      initialize_management_for(user)
    end
  end

  private
  def initialize_management_for(user)
    can :destroy, Comment do |comment|
      comment.user == user || comment.item.user == user
    end

    can :manage, Project do |project|
      project.user == user
    end

    can :manage, ProjectUserFollower

    can :manage, Actuality do |actuality|
      actuality.project.user == user
    end
  end
end
