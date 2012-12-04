# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#Category.create label: "General", position: 1
#Category.create label: "Tests"
#Category.create label: "Design"
#Category.create label: "Conception"
#Category.create label: "Performence"

["Ruby", "Ruby On Rails", "Flash", "Flex", "ASP", "C", "C#", "C++", "Java", "Visual Basic", "Delphi", "Javascript", "Zend", "Synfony", "Cake", "PHP", "Python", "QT"].each do |label|
  ProjectType.create label: label
end
