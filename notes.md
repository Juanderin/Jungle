api_test POST   /api/test(.:format)     application#test
api_users POST   /api/users(.:format)    api/users#create {:format=>:json}
api_session GET   /api/session(.:format)   api/sessions#show {:format=>:json}
            DELETE /api/session(.:format)   api/sessions#destroy {:format=>:json}
            POST   /api/session(.:format)    api/sessions#create {:format=>:json}



# Questions, 

Why isnt my token working across tabs 

Why Sign Up isnt working anymore