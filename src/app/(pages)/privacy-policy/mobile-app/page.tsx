import { Logo } from "@/components";

export default function MobileAppPrivacyPolicy() {
  return (
    <section>
      <Logo />
      <main className="m-8 mt-12">
        <h1 className="text-4xl mb-8 text-center">
          Privacy Policy for the GoodHabitBadHabit mobile app
        </h1>
        <p className="mb-6">
          <strong>Effective Date:</strong> 06/12/2024
        </p>
        <p>
          GoodHabitBadHabit (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          is committed to protecting your privacy. This Privacy Policy explains
          how your information is handled when you use our mobile application
          (&quot;the App&quot;).
        </p>

        <h2 className="my-2 text-2xl">1. Data We Collect</h2>
        <p>
          GoodHabitBadHabit does not collect, process, or store any personal
          data on our servers. All information entered or generated within the
          App is stored locally on your device.
        </p>

        <h2 className="my-2 text-2xl">2. Data Usage</h2>
        <ul className="list-disc ml-8">
          <li>
            <strong>Local Storage:</strong> The data you provide, such as
            habits, preferences, or any related details, is stored exclusively
            on your mobile device.
          </li>
          <li>
            <strong>No Remote Access:</strong> We do not have access to your
            data, and it is not transmitted to any external server, third party,
            or cloud storage.
          </li>
        </ul>

        <h2 className="my-2 text-2xl">3. User Control</h2>
        <p>You have full control over your data. You can:</p>
        <ul className="list-disc ml-8">
          <li>
            <strong>Delete Data:</strong> Remove any data directly using the
            App’s delete feature.
          </li>
          <li>
            <strong>Clear All Data:</strong> Uninstalling the App will
            permanently delete all locally stored data.
          </li>
          <li>
            <strong>Device Tools:</strong> Utilize your mobile operating
            system’s tools to manage or delete App data.
          </li>
        </ul>

        <h2 className="my-2 text-2xl">4. Third-Party Sharing</h2>
        <p>
          GoodHabitBadHabit does not share, sell, or disclose your data to any
          third parties under any circumstances.
        </p>

        <h2 className="my-2 text-2xl">5. Data Security</h2>
        <p>
          While data is stored locally on your device, it is your responsibility
          to ensure your device is secure. We recommend:
        </p>
        <ul className="list-disc ml-8">
          <li>Using strong passwords or device encryption.</li>
          <li>
            Regularly updating your device&apos;s operating system to ensure you
            have the latest security patches.
          </li>
        </ul>

        <h2 className="my-2 text-2xl">6. Children&apos;s Privacy</h2>
        <p>
          GoodHabitBadHabit is not intended for use by children under the age of
          13. We do not knowingly collect or store any personal data from
          children.
        </p>

        <h2 className="my-2 text-2xl">7. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices
          or for legal, technical, or operational reasons. We will notify you of
          any significant changes by posting a notice within the App.
        </p>

        <h2 className="my-2 text-2xl">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <ul className="list-disc ml-8">
          <li>
            <strong>Email:</strong> hi@eiilo.com
          </li>
        </ul>
        <br />
        <p>
          <strong>Your Privacy, Your Control</strong>
        </p>
        <p>
          GoodHabitBadHabit is designed to respect your privacy. Since all data
          is stored locally, your information remains fully under your control.
        </p>
      </main>
    </section>
  );
}
