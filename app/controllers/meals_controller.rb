class MealsController < ApplicationController

  respond_to :html, :json

  def index
    meals = Meal.all
    respond_with meals
  end

  def show
    meal = Meal.find(params[:id])
    respond_with meal
  end

end
