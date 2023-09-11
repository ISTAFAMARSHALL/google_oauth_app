class AuthCallbacksController < ApplicationController
    
    def omniauth_success
        user = User.find_or_create_from_omniauth(request.env['omniauth.auth'])
        sign_in_and_redirect(user, event: :authentication)
    end
    
    def omniauth_failure
        redirect_to '/login'
    end

end
