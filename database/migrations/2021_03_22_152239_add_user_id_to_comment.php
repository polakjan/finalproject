<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdToComment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('comments', function (Blueprint $table) {
            //
            if (!Schema::hasColumn('comments', 'user_id')) {
                $table->foreignId('user_id')->after('id');
            }

            if (!Schema::hasColumn('comments', 'entity_id')) {
                $table->foreignId('entity_id')->after('user_id');
            }

            if (!collect(DB::select("SHOW INDEXES FROM comments"))->pluck('Key_name')->contains('user_comment_unique_index')) {
                $table->unique(['entity_id', 'user_id'], 'user_comment_unique_index');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('comments', function (Blueprint $table) {
            //
            if (collect(DB::select("SHOW INDEXES FROM comments"))->pluck('Key_name')->contains('user_comment_unique_index')) {
                $table->dropIndex('user_comment_unique_index');
            }

            if (Schema::hasColumn('comments', 'entity_id')) {
                $table->dropColumn('entity_id');
            }

            if (Schema::hasColumn('comments', 'user_id')) {
                $table->dropColumn('user_id');
            }
        });
    }
}
