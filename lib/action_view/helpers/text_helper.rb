module ActionView
  module Helpers
    module TextHelper
      def excerpt(text, phrase, options = {})
        return unless text && phrase
        radius = options.fetch(:radius, 100)
        omission = options.fetch(:omission, "...")
        separator = options.fetch(:separator, "")

        phrase = Regexp.escape(phrase)
        regex = /#{phrase}/i

        return unless matches = text.match(regex)
        phrase = matches[0]

        text.split(separator).each do |value|
          if value.match(regex)
            regex = phrase = value
            break
          end
        end

        first_part, second_part = text.split(regex, 2)

        options = options.merge(:part_position => :first)
        prefix, first_part = cut_part(first_part, options)

        options = options.merge(:part_position => :second)
        postfix, second_part = cut_part(second_part, options)

        prefix + (first_part + separator + phrase + separator + second_part).strip + postfix
      end

      private
        def cut_part(part, options)
          radius = options.fetch(:radius, 100)
          omission = options.fetch(:omission, "...")
          separator = options.fetch(:separator, "")
          part_position = options.fetch(:part_position)

          return "", "" unless part

          part = part.split(separator)
          part.delete("")
          affix = part.size > radius ? omission : ""
          part = if part_position == :first
            drop_index = [part.length - radius, 0].max
            part.drop(drop_index).join(separator)
          else
            part.first(radius).join(separator)
          end

          return affix, part
        end
    end
  end
end
