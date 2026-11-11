# Books API Week 02 Spec - Version 1

## Feature 2: Author CRUD Operations

### Goal
Update the existing Week 01 book API so book documents include a reference to an author ID and the API supports all CRUD operations for books. Add an author collection that stores author ids, names and birth years and the API supports all CRUD operations for authors.
Every book and author route must be documented and testable in Swagger.

### Data Model
Author documents will be stored in the `authors` collection.

Required authors fields:
- `id`: string, required, custom id such as `a1`
- `author`: string, required, the author's full name (e.g., "Jane Doe")
- `birthYear`: string, required, the year the author was born


Authors will continue to use custom string ids instead of MongoDB `_id` values for route parameters.

### Relationship to Books 
Books and authors are linked using the custom string IDs (`id` and `authorId`). 


* **Creating/Updating Books:** When a client creates or updates a *book*, the API must reject the request with a `400` status code if the submitted `authorId` does not match an existing author's `id`.
* **Deleting Authors:** When a client attempts to delete an *author*, the API must query the `books` collection. If any book document contains an `authorId` matching that author's `id`, the API must reject the deletion with a `400` status code to prevent orphaned book records.

### Routes

#### GET /authors
Purpose: Return all authors.

Success:
- Status code: `200`
- Response body: an array of author objects

Errors:
- `500` if an unexpected server or database error occurs

#### GET /authors/:id
Purpose: Return one author by its custom id.

Success:
- Status code: `200`
- Response body: the matching author object

Errors:
- `404` if no author exists with that id
- `500` if an unexpected server or database error occurs

#### POST /authors
Purpose: Create a new author.

Request body:

    {
      "id": "a4",
      "author": "Example Author Name",
      "birthYear": "1986"
    }

Success:
- Status code: `201`
- Response body: the newly created author object

Errors:
- `400` if a required field (`id`, `author`, `birthYear`) is missing
- `400` if the `id` already exists
- `500` if an unexpected server or database error occurs

#### PUT /authors/:id
Purpose: Update an existing author.

Request body:

    {
      "author": "Updated Author",
      "birthYear": "1986"
    }

Success:
- Status code: `200`
- Response body: the updated author object

Errors:
- `400` if a required field is missing
- `404` if no author exists with that id
- `500` if an unexpected server or database error occurs

#### DELETE /authors/:id
Purpose: Delete an existing author only if they have no active books.

Success:
- Status code: `204`
- Response body: none

Errors:
-`400` if the author can't be deleted because one or more documents in the `books` collection still reference this author's `id` 
- `404` if no author exists with that id
- `500` if an unexpected server or database error occurs

### Swagger Documentation
Swagger must document every author route.

### Deployment Expectations
After implementation, the author routes must work locally and from the deployed Render application. The deployed Swagger page at `/api-docs` must allow someone to test every author route from the browser.




