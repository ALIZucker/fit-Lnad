export interface MenuData {
    title: string;
    subtitle: string[];
}

export interface MenuDataAll {
    title: string;
    subset: MenuData[];
}


export const dataSreach: string[] = [
    "ست تیشرت","استوک","ورزش زنانه","کفش","کیت ورزشی","وزنه و دمبل","ورزشی پسرانه","ماگ و فلاسک","هودی","شلوار","بلوز","کفش اسکیت","جوراب ورزشی","کفش بسکتبال"
]

const menuDataWoman: MenuData[] = [
    {
        title: "لباس ورزشی زنانه",
        subtitle: ["تاپ ورزشی", "مایو", "کیت ورزشی", "هودی", "تیشرت ورزشی", "ست لباس ورزشی"]
    }, {
        title: "شلوار ورزشی زنانه", subtitle: ["شلوار ورزشی", "جوراب ورزشی", "هدبند", "شلوارک ورزشی"]
    }, {
        title: " کفش  ورزشی زنانه", subtitle: ["کفش بسکتبال", "کفش اسکیت", "کفش کوهنوردی"]
    }
]

const menuDataman: MenuData[] = [
    {
        title: "لباس ورزشی مردانه",
        subtitle: ["سویشرت ورزشی", "رکابی", "کیت ورزشی", "هودی", "تیشرت ورزشی", "ست لباس ورزشی"]
    }, {
        title: "شلوار ورزشی مردانه", subtitle: ["شلوار ورزشی", "جوراب ورزشی", "شلوار ورزشی", "هدبند", "شلوارک ورزشی"]
    }, {
        title: " کفش  ورزشی ", subtitle: ["کفش بسکتبال", "کفش اسکیت", "دمپایی", "کفش کشتی", "کفش کوهنوردی"]
    }
]

const menuDataLavSport: MenuData[] = [
    {
        title: "لوازم ورزشی ",
        subtitle: ["وزنه و دمبل", "رکابی", "لوازم یوگا", "ساک ورزشی", "کوله پشتی ", "ساق بند و مچ بند"]
    }, {
        title: "برند ورزشی ", subtitle: ["کوله پشتی ", "نایک", "پوما", "لوازم دیگر"]
    }
]
const menuDatashake: MenuData[] = [
    {
        title: "شیکر",
        subtitle: ["ماک و فلاسک", "شیکر بدنسازی"]
    }, {
        title: "قمقمه", subtitle: ["جا بودری", "قمقمه ورزشی"]
    }
]
const menuDataChild: MenuData[] = [
    {
        title: "لوازم ورزشی دختر",
        subtitle: ["ست لباس ورزشی", "کیت ورزشی", "هودی", "تیشرت", "بلوز"]
    }, {
        title: "لباس پسرونه", subtitle: ["سویشرت", "شلوار ورزشی", " کیت ورزشی", "ست لباس ورزشی"]
    }, {
        title: "کفش ورزشی دخترونه", subtitle: ["کفش استوک", "کفش بسکتبال", "کفش اسکیت"]
    }
]


export const menuData: MenuDataAll[] = [
    {
        title: "مردانه",
        subset: menuDataman
    },
    {
        title: "زنانه",
        subset: menuDataWoman
    }, {
        title: "بچگانه",
        subset: menuDataChild
    },
    {
        title: "لوازم ورزشی",
        subset: menuDataLavSport
    }, {
        title: "شیکر و جاگ",
        subset: menuDatashake
    }
]
