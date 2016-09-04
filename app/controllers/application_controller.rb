class ApplicationController < ActionController::Base
  include ActionController::MimeResponds

  protect_from_forgery with: :exception

  respond_to :json

  def home
    render 'layouts/application'
  end


end
