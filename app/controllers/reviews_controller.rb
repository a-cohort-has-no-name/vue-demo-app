class ReviewsController < ApplicationController
  def index
    @reviews = [
        "Vue.js is the best thing since sliced bread!",
        "I love Vue.js, especially when I'm programming!",
        "Vue.js is waaaaay better than Chinese Checkers."
      ]
  end
end
