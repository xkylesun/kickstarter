# Jumpstarter - a Kickstarter clone
[Link to Live Site](https://jumpstarter-ks.herokuapp.com/?#/)
  
## Technologies
This site incorporates the following technologies / modules:
* React + Redux for frontend rendering / navigating
* Rails for backend API and transferring data in JSON format
* Kaminari gem for page separation / loading
* Heroku and Heroku Postgres for hosting the main site
* Active Storage for managing reference to images hosted separately on AWS S3 cloud storage

## Documentation
* Search

  Navbar incorporates a search feature that is only made visible when the user clicks the search button. Upon user hit the enter key, the user input is translated into search queries embedded in the URL and transfer the user to the designated URL. The destination site, within the componentDidMount react lifecycle method, will fire the query to the database and render the receiving contents.

```Javascript
  // search_bar.jsx
      if (e.key === "Enter"){
          let searchTerm = e.currentTarget.value.toLowerCase().replace(" ","%20");
          toggleHide("search-bar");
          this.props.history.push(`/discover/ref=search&term=${searchTerm}`);
      }
```

* Regex

    Regular expression is used within the SQL query to filter projects that meet the user's search criteria.

```ruby
    # projects_controller.rb
      regex = "%#{search}%"
      @projects = Project.where("lower(projects.title) like ? or projects.category = ?", regex, search)
        .distinct.order("due_date asc")
```

* Infinite Scrolling

  Infinite scrolling is implemented to improve the user experience while navigating the site. Whenever the user navigates to the bottom of the page, a callback is triggered to load additional contents and append to the bottom of the page. In addition, the scrolling event is throttled to optimize performance.

```Javascript 
  // util.js
      let callback = (e) => {
          let ele = e.target.scrollingElement;
          if (ele.scrollHeight - ele.scrollTop === ele.clientHeight) {
              this.loadMore();
          }
      };
      document.addEventListener('scroll', _.throttle(callback, 1000));
```

  On the backend, a paginator (Kaminari) separates projects queried from the database into pages and keeps track of the amount of data to be transmitted to the frontend. Due to the number of projects seeded on the database, items per page was set to 3 to enable multiple loadings. 

```ruby
  # projects_controller.rb 
    search = (filter_params[:search_term] || "").downcase
    limit = filter_params[:limit] || 3
    page = filter_params[:page]

    @projects = Project.order("due_date asc")
      .includes(:creator, :pledges, image_attachment: :blob)
      .page(page).per(limit)
    @last_page = @projects.page(page).per(limit).last_page? || @projects.page(page).per(limit).out_of_range?
```

  Infinite Scroll Demo: 
  
  ![infinite-scroll-demo](https://lh3.googleusercontent.com/Fjeh1K-J3Rou00FNM1mNSRxl45kSfrT5IE2Eqxq5ms4VIA7t6Gn50XqcNkREgfef1xRZfZXdf2qjDJdX7IFCkMZWTVy5iOvs3HwJL_zCsDHlFqT6HBLv4ikZhkUXaf5WQ6Q8S2iYks7QCkr1tFr1QTR134QhmpepULnHQUDHxv_Z-WyeMi7y5kJ7_0DnvqjsqKRfukAP5kvTN-PTa25vrm9ikyoMaz7ye4nKan-M3mO8CbgDMETNP02kEYvIIHq_CFz5AChBhGjMvpOOA8CIfUSYSlf2BRxaF6kU1jgaW5o4kTEwFmOG4HQamYHaFXq-GZwMjhPbiHsvIBMRu4AJW-3GFT1FQGXl47aX5n_JXgK7lC7eXr0B7yWvwA115AGibFH21D4rYflIxwFcc5wW_3TTMay0mIky2p54IwbqIbOm-lLZI2Ks7FecluUWNKEzA7Ba2YmpDGGsguDEaXpiPyr0dLrFUKyDCk8H-keoaDNBDn6T_LaeMT2R1-9owY2bome8PPWLGJ7yl7C-meHPTefzNWxQxI104PRPH1mTQMX6kZhF1M37cLg6ePmGPI61QWplNI6sSZFpSL-ngKUGbMTl9ZtHmQmncCrrUwDOZWXI3HFJ8Cwu-gcbmKhxmOvZTbxgxjrHnTprzMIZeMe0Sokc8OVYomemNnnG3O_9ykN-XTh0EJpyeA=w1044-h694-no)

## Acknowledgement
Page layout and design inspired by [Kickstarter](https://www.kickstarter.com/)
