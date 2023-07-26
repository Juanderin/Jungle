json.user do
    json.extract! @user, :id, :email, :username, :created_at, :updated_at
end

json.img_url @user.img.url