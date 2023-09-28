# db-issy-tess-tommaso-james

Finsbury Park Restaurant and Cafe Information - Exciting!

You can see the delpoyed site [here](https://db-issy-tommaso-james-tess-woo.fly.dev/).

### Installation

1.  Clone the repository to your local machine:

```shell
git clone https://github.com/fac28/db-issy-tess-tommaso-james
```

2. Navigate to the project directory:
   ```shell
   cd db-issy-tess-tommaso-james
   ```
3. Install project dependencies using npm:
   ```shell
   npm install
   ```

### Running Locally

To run the project locally, follow these steps:

1. Start the Node.js server:
   ```shell
   npm start
   ```
2. Open your web browser and visit http://localhost:3000 to access db-issy-tess-tommaso-james locally.

### Team:

Tommaso: UX/UI  
Issy: DevOps  
James: QA  
Tess: Scrum

### Schema:

Creating a schema for a project involving a database of Food and Coffee recommendations around Finsbury Park in London with many-to-many relationships requires careful planning to ensure that you can efficiently store and retrieve data. Here's an example of what the schema might look like:

Venue Table:

- id (Primary Key)
- name (of Restaurant / cafe)
- location_id

Location Table:

- id (Primary Key)
- name (Boroughs e.g., Finsbury Park)
- street
- postcode

Cuisine Table:

- id (Primary Key)
- name (e.g., Japanese, Italian)

Establisment_Cuisine Table (Many-to-Many Relationship):

- venue_id
- cuisine_id

<!-- More options to include...

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
- created_at (timestamp for when the user added the recommendation) -->

This schema allows you to:

Store information about locations (e.g., Finsbury Park).
Categorize recommendations into categories (e.g., Coffee Shops, Restaurants).
Store details about individual recommendations, including their names, descriptions, ratings, and their associated location and category.
Tag recommendations with various attributes (e.g., "Vegetarian-Friendly") to provide more detailed information.
Create many-to-many relationships between recommendations and tags, allowing a recommendation to have multiple tags and vice versa.
Manage user accounts for users who can add and interact with recommendations.
Create many-to-many relationships between users and recommendations to track which recommendations each user has added.
With this schema, you can build a robust application for users to discover and share food and coffee recommendations around Finsbury Park in London while efficiently managing relationships between locations, categories, recommendations, tags, and users.
