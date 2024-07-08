<script>
export default {
	name: "partySummary",
    props: {
        partyData: Object,
    },
    mounted() {
        console.log("partyData", this.partyData);
    },
}
</script>

<template>

    <v-card>
        <template v-slot:title>
            {{ partyData.title }}
        </template>

        <template v-slot:subtitle>
            <section>
                {{ partyData.subtitle }}
            </section>
            <section>
                <v-chip>{{ partyData.tags.type }}</v-chip>
                <v-chip>{{ partyData.tags.system }}</v-chip>
                <v-chip>{{ partyData.tags.time }}</v-chip>
                <v-chip>{{ partyData.tags.duration }}</v-chip>
                <v-chip>Table {{ partyData.tags.location }}</v-chip>
            </section>
        </template>

        <template v-slot:text>
            {{ partyData.partySummaryText }}
        </template>
    </v-card>
</template>

