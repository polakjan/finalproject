<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            'comment' => 'required|string|min:0|max:250'
        ]);

        // create new comment in DB

        $comment = new Comment();
        $comment->comment = $request->input('comment');
        $comment->user_id = $request->input('user_id');

        $comment->save();
    }
}
