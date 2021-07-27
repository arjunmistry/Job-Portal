/*-------------------NAVBAR DROPDOWN--------------------*/

$(document).ready(function() {
// Check for click events on the navbar burger icon
$(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
});
});

/*-------------------ADD JOB-----------------------*/

const AddJobApp = {
    data() {
        return {
            title: '',
            company_name: '',
            short_description: '',
            company_size: '',
            errors: []
        }
    },
    delimiters: ['[[', ']]'],
    methods: {
        validateForm(e) {
            this.errors = []

            if (this.title === '') {
                this.errors.push('The title field is missing!')
            }

            if (this.short_description === '') {
                this.errors.push('The short description field is missing!')
            }

            if (this.company_name === '') {
                this.errors.push('The company name field is missing!')
            }

            if (this.company_size === '') {
                this.errors.push('The company size is missing!')
            }

            if (this.errors.length) {
                e.preventDefault()

                return false
            } else {
                return true
            }
        }
    }
}

Vue.createApp(AddJobApp).mount('#add-job-app');

/*-------------------EDIT JOB-----------------------*/

const EditJobApp = {
    data() {
        return {
            title: '{{ job.title }}',
            company_name: '{{ job.company_name }}',
            short_description: '{{ job.short_description }}',
            company_size: '{{ job.company_size }}',
            errors: []
        }
    },
    delimiters: ['[[', ']]'],
    methods: {
        validateForm(e) {
            this.errors = []

            if (this.title === '') {
                this.errors.push('The title field is missing!')
            }

            if (this.short_description === '') {
                this.errors.push('The short description field is missing!')
            }

            if (this.company_name === '') {
                this.errors.push('The company name field is missing!')
            }

            if (this.company_size === '') {
                this.errors.push('The company size is missing!')
            }

            if (this.errors.length) {
                e.preventDefault()

                return false
            } else {
                return true
            }
        }
    }
}

Vue.createApp(EditJobApp).mount('#edit-job-app');

/*-------------------ADD INTERVIEW-----------------------*/

const InterviewApp = {
    data() {
        return {
            video_1: '',
            video_2: '',
            video_3: '',
            errors: []
        }
    },
    delimiters: ['[[', ']]'],
    methods: {
        validateForm(e) {
            this.errors = []

            if (this.video_1 === '') {
                this.errors.push('The video1 field is missing!')
            }
            if (this.video_2 === '') {
                this.errors.push('The video2 field is missing!')
            }
            if (this.video_3 === '') {
                this.errors.push('The video3 field is missing!')
            }

            if (this.errors.length) {
                e.preventDefault()

                return false
            } else {
                return true
            }
        }
    }
}

Vue.createApp(InterviewApp).mount('#interview-app');