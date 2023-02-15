# techBlog

## Description

```
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies.

The goal of this project was to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well following the MVC paradigm structurally using Handlebars.js as a templating language, Sequelize as the ORM, and the express-session npm package for authentication. 
```

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Table of Contents

- [Link to deployed website](#link-to-deployed-website)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credits](#credits)

## Link-to-deployed-website

[https://ckim812-techblog.herokuapp.com/](https://ckim812-techblog.herokuapp.com/)

## Usage

```
Press Login to login to site if you have an existing username and password. If not, press "Signup instead" to be redirected to the signup page.

Signup by entering a username and password (8-16 characters) and press submit. You will be redirected to your dashboard.

You can add a post by pressing "+ New Post". After you enter in your title and content, you will be redirected to your dashboard with your new post. You can edit/delete your posts on the dashboard.

If you press Home, you will be able to see posts from all users. You can add comments to posts on the homepage by clicking on the post you want to add a comment to.

On every page, there is an inactivity timer (60 seconds). If you are inactive for more than 60 seconds, you will be logged out and be redirected to the login page.
```

## Technologies-Used

```
HTML, JS
```

## Credits

```
Created by Charles Kim.
