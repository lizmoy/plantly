class Plant < ApplicationRecord
  belongs_to :user
  has_one :log
end
