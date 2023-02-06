import { describe, it, expect } from "@jest/globals";
import {getDateArray} from "../src/services/twilio/funciones";

describe("getDateArray" ,() => {
    it("creando array con fecha de inicial igual que la fecha final", () => {
        expect (getDateArray(new Date("2023-02-03T19:00:00Z"), new Date("2023-02-03T19:00:00Z"), 2 * 1000 *60*60)).toEqual([new Date("2023-02-03T19:00:00Z")])
        }
        )
    }
)