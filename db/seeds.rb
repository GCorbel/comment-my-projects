Page.create(title: 'Home', body: 'Home', home: true, locale: 'en')
Page.create(title: 'Accueil', body: 'Accueil', home: true, locale: 'fr')
["Ruby", "Ruby On Rails", "Flash", "Flex", "ASP", "C", "C#", "C++", "Java", "Visual Basic", "Delphi", "Javascript", "Zend", "Synfony", "Cake", "PHP", "Python", "QT"].each do |name|
  ActsAsTaggableOn::Tag.create! name: name
end
