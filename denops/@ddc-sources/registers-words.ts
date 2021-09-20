import type { Candidate } from "https://deno.land/x/ddc_vim@v0.13.0/types.ts";
import { BaseSource } from "https://deno.land/x/ddc_vim@v0.13.0/types.ts";
import type {
  GatherCandidatesArguments,
} from "https://deno.land/x/ddc_vim@v0.13.0/base/source.ts";

type Params = {
  regex: string;
  registers: string;
};

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    const p = args.sourceParams as Params;
    const allRegVimExpr = `[${
      p.registers.split("").map((r) => `@${r}`).join(",")
    }]`;
    const words = await args.denops.eval(allRegVimExpr) as string[];
    const cs: Candidate[] = words
      .flatMap((
        reg,
        i,
      ) => [
        ...Array.from(reg.matchAll(new RegExp(p.regex, "gu"))).map((w) => ({
          word: w[0],
          kind: p.registers[i],
        })),
      ]);
    return cs;
  }

  params(): Params {
    return {
      regex: "[-_\\p{L}\\d]+",
      registers: `"012*+/`,
    };
  }
}
