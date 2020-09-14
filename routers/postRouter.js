const router = require('express').Router();
const Posts = require('./postModel.js');
const validate = require('../auth/validate.js');

router.use('/:id', validate.user);

// base URL/api/posts

// Get Requests
router.get("/", (req, res, next) => {
    Posts.findAll()
        .then(posts => res.status(200).json(posts))
        .catch(err => next({ code: 500, message: "Error retrieving posts", err }));
});

// router.get('/:id', (req, res) => {
//     const {id} = req.params;
//     db.select('*')
//         .from('posts')
//         .where('id', id)
//         .then(posts => res.status(200).json({data: posts}))
//         .catch((err) => console.log(err));
// })

// Post Requests
router.post('/', (req, res) => {
    Posts.add(post)
        .then(newPost => {
            res.status(201).json({post_id: newPost.id, title: newPost.title});
        })
        .catch(err => next({code: 500, message: "Error adding new post", err}));
});

// Put Request
// router.put('/:id', (req, res) => {
//     const {id} = req.params;
//     const changes = req.body;
//     db('posts')
//         .where('id', id)
//         .update(changes)
//         .then(count => {
//             if (count > 0) {
//                 res.status(200).json({message: 'Record numbers changed', count });
//             } else {
//                 res.status(404).json({message: 'that id does not exist'});
//             }
//         })
//         .catch((err) => console.log(err));
// });

// Delete Request
// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
//     db('posts')
//         .where('id', id)
//         .delete()
//         .then(count => {
//             if (count > 0) {
//                 res.status(200).json({message: 'Number of records deleted', count});
//             } else {
//                 res.status(404).json({message: 'That is not a valid id'});
//             }
//         })
//         .catch((err) => console.log(err));
// });



module.exports = router;