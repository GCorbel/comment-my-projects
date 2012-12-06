["Ruby", "Ruby On Rails", "Flash", "Flex", "ASP", "C", "C#", "C++", "Java", "Visual Basic", "Delphi", "Javascript", "Zend", "Synfony", "Cake", "PHP", "Python", "QT"].each do |name|
  ActsAsTaggableOn::Tag.create! name: name
end
