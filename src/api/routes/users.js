import { Router } from 'express';
const router = Router();

// Get route for users
router.get('/users', (req, res) => {
  res.send('Users route is working');
});

export default router;
