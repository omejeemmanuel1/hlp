'use client';
import { toast } from 'sonner';
import Image from 'next/image';
import toastImg from '@/public/toast-img.svg';
import cancelImg from '@/public/cancel-icon.svg';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

// import the form components
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { formSchema } from '@/schema';
import BouncingDots from './BouncingDots';
import z from 'zod';
export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      businessName: '',
      serviceType: '',
      location: '',
      how_do_you_hear_about_us: 'social_media',
    },
  });

  function handleSuccessToast() {
    const toastID = toast(
      <div className="w-full max-w-md rounded-xl border border-green-600 bg-green-50 shadow-md p-4 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src={toastImg}
              alt="Toast Icon"
              width={20}
              height={20}
              quality={100}
            />
            <h2 className="font-bold text-gray-900 text-base font-lato tracking-[1.5%] leading-loose">
              Submitted Successfully !!!
            </h2>
          </div>

          <div className="">
            <Image
              src={cancelImg}
              alt="Toast Icon"
              onClick={() => toast.dismiss(toastID)}
              width={20}
              height={20}
              quality={100}
              className="cursor-pointer"
            />
          </div>
        </div>

        <p className="text-[#8A8A8A] mt-2 text-[12px] font-lato font-medium leading-4 tracking-[2%]">
          We have received your submission and our team will reach out to you
          shortly …
        </p>

        <div className="md:w-full md:flex md:items-center justify-end">
          <Link
            href="https://chat.whatsapp.com/DRrcg03Bli6DyTJOCxvSx0"
            className="mt-4 w-full flex items-center justify-center rounded-md bg-[#9d20c7] text-white font-semibold py-2 text-sm md:1/2"
          >
            Join WhatsApp Community
          </Link>
        </div>
      </div>
    );
  }

  // Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok) {
        handleSuccessToast();
        form.reset();
      } else {
        toast.error(data.errors || 'Submission failed');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section className="bg-linear-to-b from-white to-greyColor w-full h-full md:p-10 border border-[#E6E6E6] rounded-xl  px-4 py-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex flex-col gap-4 md:mb-6">
            <h1 className="font-lato font-extrabold text-2xl text-black leading-[100%]">
              Register as a Provider
            </h1>
            <p className="font-lato font-medium -tracking-normal text-sm leading-5 text-[#545454] md:mb-6">
              Please fill in the following fields below correctly to be a part
              of our provider community.
            </p>
          </div>
          <div className="w-full flex flex-col  mt-[31]">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="mb-3 gap-1.5">
                  <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="E.g Olayinka Chukwuemeka Hassan"
                      {...field}
                      className="bg-[#FFFFFF]
                        placeholder:font-medium   placeholder:text-[#B0B0B0]  
                        py-4 px-3 font-lato text-sm leading-1 tracking-normal md:w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col md:flex-row w-full md:gap-4">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className=" md:w-1/2 md:flex md:flex-col py-2 mb-3 gap-1.5">
                    <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="E.g 081*********"
                        {...field}
                        className="bg-[#FFFFFF] 
                          placeholder:font-medium   placeholder:text-[#B0B0B0] 
                        py-4 px-3 font-lato text-sm leading-1 tracking-normal "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="md:w-1/2 mb-3 gap-1.5">
                    <FormLabel
                      className="font-lato font-semibold text-sm leading-5 tracking-[1.5%]
                    
                    text-[#333333]"
                    >
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="E.g Olayi**@gmail.com"
                        {...field}
                        className="bg-[#FFFFFF] 
                        
                        placeholder:font-medium   placeholder:text-[#B0B0B0] 
                        py-4 px-3 font-lato text-sm leading-1 tracking-normal "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col md:flex-row w-full md:gap-4">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem className="md:w-1/2 mb-3 gap-1.5">
                    <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                      Business Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="E.g Ola Ventures Limited"
                        {...field}
                        className="bg-[#FFFFFF]  placeholder:font-medium   placeholder:text-[#B0B0B0]   py-4 px-3 font-lato text-sm leading-1 tracking-normal "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem className="md:w-1/2 mb-3 gap-1.5">
                    <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                      Service Type
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="E.g Carpenter"
                        {...field}
                        className="bg-[#FFFFFF]  py-4 px-3   placeholder:font-medium   placeholder:text-[#B0B0B0]  font-lato text-sm leading-1 tracking-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="mb-8 gap-1.5 ">
                  <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                    Location
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="E.g Lagos State, Nigeria."
                      {...field}
                      className="bg-[#FFFFFF] py-4 px-3 font-lato   placeholder:font-medium   placeholder:text-[#B0B0B0]  text-sm leading-1 tracking-normal "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="how_do_you_hear_about_us"
            render={({ field }) => (
              <FormItem className=" flex flex-col  ">
                <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333] md:mb-4">
                  How did you hear about us ?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className=" md:flex md:flex-wrap"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="social_media"
                        id="r1"
                        className="bg-white h-6 w-6"
                      />

                      <Label
                        htmlFor="r1"
                        className="text-sm  font-lato font-semibold leading-5 tracking-[1.5%] text-[#333333] md:truncate md:w-full"
                      >
                        Social media
                      </Label>
                    </div>

                    <div className="flex items-center gap-3 ">
                      <RadioGroupItem
                        value="family_friends"
                        id="r2"
                        className="bg-white h-6 w-6"
                      />

                      <Label
                        htmlFor="r2"
                        className="text-sm  font-lato font-semibold leading-5 tracking-[1.5%] text-[#333333] md:truncate md:w-full "
                      >
                        Family & Friends
                      </Label>
                    </div>

                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="fliers"
                        id="r3"
                        className="bg-white h-6 w-6"
                      />
                      <Label
                        htmlFor="r3"
                        className="text-sm font-lato font-semibold leading-5 tracking-[1.5%] text-[#333333] md:truncate md:w-full"
                      >
                        Fliers
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="google_search"
                        id="r4"
                        className="bg-white h-6 w-6"
                      />
                      <Label
                        htmlFor="r4"
                        className="text-sm font-lato font-semibold leading-5 tracking-[1.5%] text-[#333333] md:truncate md:w-full"
                      >
                        Goggle Search
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="blog_article"
                        id="r5"
                        className="bg-white h-6 w-6"
                      />
                      <Label
                        htmlFor="r5"
                        className="text-sm font-lato font-semibold leading-5 tracking-[1.5%] text-[#333333] md:truncate md:w-full"
                      >
                        Blog or online Article
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full h-full  flex items-center justify-end md:mt-[73] mt-[26]">
            <Button
              // className="text-white bg-[#9C28B1] w-full font-lato font-bold text-base h-full py-3 md:w-1/2"
              className="relative flex items-center justify-center bg-[#9C28B1] text-white
               font-lato font-bold text-base px-6 py-3 rounded-md md:w-1/3 w-full hover:bg-[#9C28B1]
               md:max-w-[300px] transition-all"
              type="submit"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center w-full">
                  <BouncingDots color="white" baseHeight={0} maxSize={10} />
                </div>
              ) : (
                'Submit'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
