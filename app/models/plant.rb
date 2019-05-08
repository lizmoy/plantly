class Plant < ApplicationRecord
  belongs_to :user, optional: true
  has_one :log, dependent: :delete
end
