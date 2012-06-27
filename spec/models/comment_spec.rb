require 'spec_helper'

describe Comment do
  it { should belong_to(:user) }
  it { should belong_to(:project) }
  it { should belong_to(:category) }

  it { should validate_presence_of(:message) }
  it { should validate_presence_of(:project) }
  it { should validate_presence_of(:category) }
  it { should validate_presence_of(:username) }

  let(:category) { build(:category) }
  let(:user) { build(:user) }
  let(:user2) { build(:user) }
  let(:user3) { build(:user) }
  let(:project) { build(:project, user: user) }
  let(:comment) { build(:comment,
                        project: project,
                        category: category,
                        user: user,
                        username: nil) }

  it "send an email to the project owner" do
    lambda do
      comment.user = user2
      comment.save
    end.should change(ActionMailer::Base.deliveries, :size).by(1)
  end

  context 'when the comment have a user' do
    it "don't validate presence of username" do
      comment.should be_valid
    end
  end

  context 'when the comment have a parent' do
    it "don't validate presence of category" do
      comment.category = nil
      comment.ancestry = 1
      comment.should be_valid
    end

    context 'when there is another discussion on the same project' do
      it 'send a mail' do
        comment_1 = create(:comment, project: project, user: user3, category: category) 
        lambda do
          comment_2 = create(:comment,
                             project: project,
                             category: category,
                             user: user2
                            )
        end.should change(ActionMailer::Base.deliveries, :size).by(2)
      end
    end

    context 'when the other discussion don\'t have user' do
      it 'don''t send a mail' do
        comment_1 = create(:comment, project: project, username: 'test', category: category) 
        lambda do
          comment_2 = create(:comment,
                             project: project,
                             category: category,
                             user: user2
                            )
        end.should change(ActionMailer::Base.deliveries, :size).by(1)
      end
    end

    context 'when the parent owner an the comment\s owner is the same' do
      it 'don''t send a mail' do
        comment_1 = create(:comment, project: project, user: user3, category: category) 
        lambda do
          comment_2 = create(:comment,
                             project: project,
                             category: category,
                             user: user3,
                             parent_id: comment_1
                            )
        end.should change(ActionMailer::Base.deliveries, :size).by(1)
      end
    end

    context 'when the comment\'s owner is the project owner' do
      it 'don''t send a mail' do
      lambda do
        create(:comment,
               project: project,
               category: category,
               user: project.user)
        end.should_not change(ActionMailer::Base.deliveries, :size)
      end
    end

    context 'when the parent owner is the project\'s owner is the same' do
      it 'don''t send a mail' do
        comment_1 = create(:comment, project: project, user: user, category: category) 
        lambda do
          comment_2 = create(:comment,
                             project: project,
                             category: category,
                             user: user3,
                             parent_id: comment_1
                            )
        end.should change(ActionMailer::Base.deliveries, :size).by(1)
      end
    end

    context 'when the parent owner is the project\'s owner is the same' do
      it 'don''t send a mail' do
        project.save
        project.add_follower(user2)
        lambda do
          create(:comment,
                 project: project,
                 category: category,
                 user: user)
        end.should change(ActionMailer::Base.deliveries, :size).by(1)
      end
    end
  end
end
