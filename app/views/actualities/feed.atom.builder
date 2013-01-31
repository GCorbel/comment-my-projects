atom_feed language: 'fr-FR' do |feed|
  feed.title 'Acutalités de Social-Reviewing'
  feed.updated @updated

  @actualities.each do |actuality|
    feed.entry(actuality) do |entry|
      entry.url actuality_path(actuality)
      entry.title actuality.title
      entry.content markdown(actuality.body), type: 'html'
      entry.updated(actuality.updated_at.strftime("%Y-%m-%dT%H:%M:%SZ"))

      entry.author do |author|
        author.name actuality.user.username
      end
    end
  end
end
