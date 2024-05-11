
export const metadata = {
  title: "MoonDash - Faucet",
  description: "Dash Free Faucet",
};

import PageHeader from "@/components/page-header";
import ClaimForm from "@/components/claim-form";

export default function Home() {
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader className="mb-12" title="Want to claim your Dash?">
            Earn with us!
          </PageHeader>
          <ClaimForm />
        </div>
      </div>
    </section>
  );
}
