<template>
    <div class="my-4">
        <div class="row">
            <div class="col-md"></div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="fromdate"><b>Book From:</b></label>
                    <input id="fromdate" type="date" class="form-control" v-model="fromDate"
                        @change="updateToDate(); updateDate(fromDate, toDate)" :min="minDate" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="todate"><b>To:</b></label>
                    <input id="todate" type="date" class="form-control" v-model="toDate" @focus="validateFromDate"
                        @change="updateDate(fromDate, toDate)" :min="fromDate" />
                    <small v-if="dateSelectionError" class="text-danger">
                        Please select the 'Book From' date first.
                    </small>
                </div>
            </div>
            <div class="col-md"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fromDate: '',
            toDate: '',
            minDate: this.formatDate(new Date()),
            dateSelectionError: false,
        };
    },
    methods: {
        validateFromDate() {
            if (!this.fromDate) {
                this.dateSelectionError = true;
                // Optionally, you could clear the toDate if fromDate is not selected
                // this.toDate = '';
            } else {
                this.dateSelectionError = false;
            }
        },
        checkAndEmitDates() {
            if (!this.fromDate) {
                this.$emit('date-missing', 'from');
                return false;
            }
            if (!this.toDate) {
                this.$emit('date-missing', 'to');
                return false;
            }
            this.$emit('dates-valid');
            return true;
        },
        formatDate(date) {
            return date.toISOString().split('T')[0];
        },
        updateToDate() {
            this.dateSelectionError = false; // Reset error on valid date selection
            if (this.toDate && this.fromDate && this.toDate < this.fromDate) {
                this.toDate = this.fromDate;
            }
        },
        updateDate(fromDate, toDate) {
            const from = fromDate ? new Date(fromDate) : null;
            const to = toDate ? new Date(toDate) : null;
            if (from && to) {
                const fromYearMonthDay = { year: from.getFullYear(), month: from.getMonth() + 1, day: from.getDate() };
                const toYearMonthDay = { year: to.getFullYear(), month: to.getMonth() + 1, day: to.getDate() };
                this.$emit('update-dates', { fromYearMonthDay, toYearMonthDay });
            }
        }
    },
};
</script>
  
