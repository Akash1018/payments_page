import job from './static/job.png'
import content from './static/content.png'
import live from './static/live.png'
import scho from './static/scho.png'
import adsFree from './static/adFree.png'

export const selectsList = [
    {
        id: 1,
        select: 'Courses',
        arrowImg: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1685180720/Vector1_ml7shb.png'
    },
    {
        id: 2,
        select: 'Programs',
        arrowImg: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1685180720/Vector1_ml7shb.png'
    }
]

export const courseDetailsList = [
    {
        id: 1,
        icon: job,
        detail: "<span style='color:#0096FF'>100+</span> Job relevant courses"
    },
    {
        id: 2,
        icon: content,
        detail: "<span style='color:#0096FF'>20,000+</span> Hours of content"
    },
    {
        id: 3,
        icon: live,
        detail: "<span style='color:#0096FF'>Exclusive</span> webinar access"
    },
    {
        id: 4,
        icon: scho,
        detail: "Scholarship worth <span style='color:#0096FF'>₹94,500</span>"
    },
    {
        id: 5,
        icon: adsFree,
        detail: "<span style='color:#0096FF'>Ad Free</span> learning experience"
    },
]

export const monthPlansList = [
    {
        id: 1,
        months: 12,
        offerLastMonth: '25-June-2023',
        totalAmount: 99,
        scholarship: 18500
    },
    {
        id: 2,
        months: 12,
        offerLastMonth: '30-August-2023',
        totalAmount: 179,
        scholarship: 18500
    },
    {
        id: 3,
        months: 6,
        offerLastMonth: '31-August-2023',
        totalAmount: 149,
        scholarship: 18500
    },
    {
        id: 4,
        months: 3,
        offerLastMonth: '31-August-2023',
        totalAmount: 99,
        scholarship: 18500
    }
]