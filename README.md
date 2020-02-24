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
    A simple regular expression is used within the SQL query to filter projects that meet the user's search criteria.
    
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

## Acknowledgement
Page layout and design inspired by [Kickstarter](https://www.kickstarter.com/)
