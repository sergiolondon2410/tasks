<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">MEVN Stack</a>
        </nav>
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="addTask">
                                <div class="form-group">
                                    <input type="text" v-model="task.title" placeholder="Insert a new task" class="form-control">
                                </div>
                                <div class="form-group">
                                    <textarea cols="30" rows="10" v-model="task.description" placeholder="Insert a description" class="form-control"></textarea>
                                </div>
                                <button class="btn btn-primary btn-block">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // class Task {
    //     constructor(title, description) {
    //         this.title = title;
    //         this.description = description;
    //     }
    // }
    export default {
        data() {
            return {
                task: {
                    title: '',
                    description: ''
                }
            }
        },
        methods: {
            addTask() {
                console.log(this.task);
                this.clearTask();
            },
            clearTask() {
                this.task.title = '';
                this.task.description = '';
            }
        }
    }
</script>