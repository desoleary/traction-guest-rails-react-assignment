describe 'Interview Questions' do
  describe 'persons count by gender' do
    class Person
      attr_reader :name, :gender

      def initialize(name:, gender:)
        @name = name
        @gender = gender
      end
    end

    class PersonCollection < SimpleDelegator
      def initialize(persons)

        @persons = persons.map { |name:, gender:| Person.new(name: name, gender: gender) }
        super(@persons)
      end

      def count_by_gender
        @persons.group_by(&:gender).transform_values { |persons| persons.count }
      end
    end

    let(:persons) do
      [
        { name: 'Devin', gender: 'M' },
        { name: 'Jim', gender: 'M' },
        { name: 'Melanie', gender: 'F' }
      ]
    end

    it 'counts person count by gender' do
      expect(PersonCollection.new(persons).count_by_gender).to eql({ 'M' => 2, 'F' => 1 })
    end
  end

  describe 'calculate max people visible when each are in a line' do
    def max_people_visible(heights)
      max_visible = 0
      max_height = -1

      heights.each do |height|
        if height > max_height
          max_visible += 1
          max_height = height
        end
      end

      max_visible
    end

    it('calculates max number of people visible') {
      [
        { heights: [1, 2, 3, 4, 5], expected_num_visible_persons: 5 },
        { heights: [9, 2, 3, 4, 5], expected_num_visible_persons: 1 },
        { heights: [6, 7, 3, 4, 5], expected_num_visible_persons: 2 },
        { heights: [5, 5, 5, 5], expected_num_visible_persons: 1 }
      ].each do |heights:, expected_num_visible_persons:|
        expect(max_people_visible(heights)).to eql(expected_num_visible_persons)

      end
    }

  end
end


# describe 'Interview Questions' do
#   let(:persons) do
#     [
#       { name: 'Devin', gender: 'M' },
#       { name: 'Jim', gender: 'M' },
#       { name: 'Melanie', gender: 'F' }
#     ]
#   end
#
#   it 'does something' do
#     expect(PersonCollection.new(persons).count_by_gender).to eql({ 'M' => 2, 'F' => 1 })
#   end
#
#   def max_people_visible(heights)
#     max_visible = 0
#     max_height = -1
#
#     heights
#   end
#
#
# end


# Problem Statement:
#           You have been given an array of integers representing the height of people standing in a line.

# Your task is to write a function that takes in the list and returns the maximum number of people that can be seen from the front of the line. A person can be seen from the front if they are taller than all the people in front of them.
#   function max_people_visible(heights: number[]): number {
