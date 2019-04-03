import { Router, Request, Response } from 'express';
const router = Router();

// Model 
import Task from '../model/task'

router.route('/create')
    .get((req: Request, res: Response) => {
      res.render('task/create');
    })
    .post( async (req: Request, res: Response) => {
        const { title, description } = req.body;
        const task = new Task({ title, description});
        await task.save();
        res.redirect('/task/list');
    });

router.route('/list')
    .get( async (req: Request, res: Response) => {
        const tasks = await Task.find();
        res.render('task/list', { tasks });
    });

router.route('/edit/:id')
    .get( async (req: Request, res: Response) => {
        const { id } = req.params;
        const task = await Task.findById(id);
        res.render('task/edit',{task});
    })
    .post( async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, description } = req.body;
        await Task.findByIdAndUpdate(id,{ title, description});
        res.redirect('/task/list');
    });

router.route('/delete/:id')
.get( async (req: Request, res: Response) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect('/task/list');
});

export default router;