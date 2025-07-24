import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(["/products(.*)", "/", "/about", '/sign-in(.*)'])
// الصفحات التي يمكن للشخص التصفح بها بدون تسجيل دخول 
// (.*) كل شيئ مرتبط او بداخل هذه الصفحه


const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {

    const IsAdmin = (await auth()).userId === process.env.ADMIN_USER_ID;

    // اذا لم يكن ادمن وطلب الوصول للصفحه نقوم باعادته للصفحه الرئيسيه 
    if (isAdminRoute(req) && !IsAdmin) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    // فقط اذا كان الشخص قام بتسجيل الدخول يمكنه الذهاب الى هذه الصفحات 
    if (!isPublicRoute(req)) {
        await auth.protect()
    }

})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}