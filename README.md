# db-issy-tess-tommaso-james

Tommaso: UX/UI  

Issy: DevOps  

James: QA  

Tess: Scrum

Creating a schema for a project involving a database of Food and Coffee recommendations around Finsbury Park in London with many-to-many relationships requires careful planning to ensure that you can efficiently store and retrieve data. Here's an example of what the schema might look like:

Locations Table:

- location_id (Primary Key)
- name (e.g., Finsbury Park)
- address
- latitude
- longitude

Categories Table:

- category_id (Primary Key)
- name (e.g., Coffee Shops, Restaurants)

Recommendations Table:

- recommendation_id (Primary Key)
- name (e.g., "Joe's Coffee", "Tasty Bites")
- description
- rating
- location_id (Foreign Key to Locations Table)
- category_id (Foreign Key to Categories Table)

Tags Table:

- tag_id (Primary Key)
- name (e.g., "Vegetarian-Friendly", "Cozy Atmosphere")

RecommendationTags Table (Many-to-Many Relationship):

- recommendation_id (Foreign Key to Recommendations Table)
- tag_id (Foreign Key to Tags Table)

Users Table:

- user_id (Primary Key)
- username
- email
- password (hashed and salted)

UserRecommendations Table (Many-to-Many Relationship):

- user_id (Foreign Key to Users Table)
- recommendation_id (Foreign Key to Recommendations Table)
- created_at (timestamp for when the user added the recommendation)

This schema allows you to:

Store information about locations (e.g., Finsbury Park).
Categorize recommendations into categories (e.g., Coffee Shops, Restaurants).
Store details about individual recommendations, including their names, descriptions, ratings, and their associated location and category.
Tag recommendations with various attributes (e.g., "Vegetarian-Friendly") to provide more detailed information.
Create many-to-many relationships between recommendations and tags, allowing a recommendation to have multiple tags and vice versa.
Manage user accounts for users who can add and interact with recommendations.
Create many-to-many relationships between users and recommendations to track which recommendations each user has added.
With this schema, you can build a robust application for users to discover and share food and coffee recommendations around Finsbury Park in London while efficiently managing relationships between locations, categories, recommendations, tags, and users.
