setup instruction:(execute the following on git bash in the project root)

npm init -y

npm install

echo -e "
    PORT=>port<
    MONGO_URI=mongodb://localhost:27017/hotel_booking
    JWT_SECRET=>jwt_secret<
    JWT_EXPIRES_IN=1h
    ADMIN_PASSWORD=>adminpassword<
    ADMIN_EMAIL= >adminEmail<
" > .env

echo "NOTE: change Port, jwt secret, admin pw n email"


----------------------------------------------------------------------------------------------



progress:

-user role: owner, client, admin (unauthenticated/unregistered users = guest)
-owner registration requires admin validation to be usable
-admin: cant be from public registration => is instead created manually 
    can view all users
    validate an owner using id
    disable a user's acc using id (toggles the active status)



