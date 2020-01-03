FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/top-slider-2-640x500.png")}
    group
    user
  end
end