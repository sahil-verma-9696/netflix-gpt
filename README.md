# Live url
  - https://netflix-gpt-85d3b.web.app/

# Netflix-Gpt

    - configure tailwind --✅ (1)

    - src (2)
      - components (2)
        - Body -- (i move the the NavBar and Outlet to body, onAuthChange is handle from top) -- ✅
          - onAuthChange -- also unsubscribe when component unmount
          - dispatch(addUser()) -- ✅
  
        - Navbar --✅ (2)
        - SingForm -- ✅  (3)
          - ui -- ✅
          - firebase
            - email & password sing in/up -- ✅
            - google sing in/up  -- ✅
              - msg on sign up/in and logout -- have bug 🐞 for now i removes this feature
      - pages (2)
        - Home
        - Sign -- ✅
    - utils (3)
      - constant -- for storing constants
      - firebase -- ✅
    - store ✅
      - appStore ( config my store ) ✅
      - userSlice ✅
      - moviesSlice
        - nowPlayingMovies

  - shimmer ui for home page done -- ✅

    - routing (After creating some page file setting up the route on App.js) -- ✅

# Features

    - Login or sign up ✅
      - Login/Sign up - form -- ✅ 
      - Redirect to browse page -- ✅ 

    - Browse ()
    - Main Movie
      - trailer in background --✅
      - title and discription --✅ 
      - Movie Suggestion
        - horizontal movies list

    - Netflix - Gpt
      - Searchbar
      - movie suggestions

# images sources

  - special thanks for free vector image support
 ["https://www.freepik.com/free-vector/person-relaxing-home_6527965.htm#from_view=detail_alsolike"] Image by freepik
